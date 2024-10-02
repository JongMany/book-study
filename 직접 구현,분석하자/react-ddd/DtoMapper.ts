// https://medium.com/@mokremiz/building-a-flexible-dto-mapper-for-react-and-next-js-projects-3ee77055f05d

export const mapResponseToDTO = <T, U>(
  responseDTO: U,
  propertyMappings?: Record<string, any>,
): T => {
  // Create an empty object that will hold the mapped DTO
  const mappedDTO: Partial<T> = {};

  for (const key in responseDTO) {
    if (propertyMappings && key in propertyMappings) {
      // If a property mapping exists, map the response to the DTO
      const keyName = propertyMappings[key] as keyof T;
      mappedDTO[keyName] = responseDTO[key] as unknown as T[keyof T];
    } else {
      // If there is no mapping for the current key, use the key as is to set the property in the mappedDTO
      mappedDTO[key as unknown as keyof T] = responseDTO[
        key
      ] as unknown as T[keyof T];
    }
  }

  return mappedDTO as T;
};

interface MyModel {
  id: number;
  fullName: string;
}

const responseModel = { id: 1, user_name: 'Example' };
const propertyMappings = { user_name: 'fullName' };
const mappedDTO = mapResponseToDTO<MyModel, typeof responseModel>(
  responseModel,
  propertyMappings,
);
