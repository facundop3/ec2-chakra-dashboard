import faker from 'faker';

const getFakeUser = () => {
  return {
    given_name: faker.name.firstName(),
  };
};

export default getFakeUser;
