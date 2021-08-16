import faker from 'faker';

const getFakeEc2Instances = () => {
  return {
    lastPage: 2,
    instances: [
      {
        InstanceType: 't2.micro',
        State: 'stopped',
        AvailabilityZone: faker.address.countryCode(),
        PrivateIpAddress: faker.internet.ip(),
        InstanceId: faker.datatype.uuid(),
      },
      {
        InstanceType: 't2.micro',
        State: 'stopped',
        AvailabilityZone: faker.address.countryCode(),
        PrivateIpAddress: faker.internet.ip(),
        InstanceId: faker.datatype.uuid(),
      },
      {
        InstanceType: 't2.micro',
        State: 'stopped',
        AvailabilityZone: faker.address.countryCode(),
        PrivateIpAddress: faker.internet.ip(),
        InstanceId: faker.datatype.uuid(),
      },
      {
        InstanceType: 't2.micro',
        State: 'stopped',
        AvailabilityZone: faker.address.countryCode(),
        PrivateIpAddress: faker.internet.ip(),
        InstanceId: faker.datatype.uuid(),
      },
      {
        InstanceType: 't2.micro',
        State: 'stopped',
        AvailabilityZone: faker.address.countryCode(),
        PrivateIpAddress: faker.internet.ip(),
        InstanceId: faker.datatype.uuid(),
      },
      {
        Name: 'testingName-ec2',
        InstanceType: 't2.micro',
        State: 'stopped',
        AvailabilityZone: faker.address.countryCode(),
        PrivateIpAddress: faker.internet.ip(),
        InstanceId: faker.datatype.uuid(),
      },
      {
        InstanceType: 't2.micro',
        State: 'stopped',
        AvailabilityZone: faker.address.countryCode(),
        PrivateIpAddress: faker.internet.ip(),
        InstanceId: faker.datatype.uuid(),
      },
      {
        InstanceType: 't2.micro',
        State: 'stopped',
        AvailabilityZone: faker.address.countryCode(),
        PrivateIpAddress: faker.internet.ip(),
        InstanceId: faker.datatype.uuid(),
      },
      {
        InstanceType: 't2.micro',
        State: 'stopped',
        AvailabilityZone: faker.address.countryCode(),
        PrivateIpAddress: faker.internet.ip(),
        InstanceId: faker.datatype.uuid(),
      },
      {
        InstanceType: 't2.micro',
        State: 'stopped',
        AvailabilityZone: faker.address.countryCode(),
        PrivateIpAddress: faker.internet.ip(),
        InstanceId: faker.datatype.uuid(),
      },
    ],
  };
};

export default getFakeEc2Instances;
