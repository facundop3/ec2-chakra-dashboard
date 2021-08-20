export type EC2InstancesTableHeader = {
  Header: string;
  accessor: string;
};

export const EC2INSTANCE_TABLE_HEADER: EC2InstancesTableHeader[] = [
  {
    Header: 'Instance name',
    accessor: 'Name',
  },
  {
    Header: 'Instance ID',
    accessor: 'InstanceId',
  },
  {
    Header: 'Instance type',
    accessor: 'InstanceType',
  },
  {
    Header: 'Instance state',
    accessor: 'State',
  },
  {
    Header: 'Instance availability zone',
    accessor: 'AvailabilityZone',
  },
  {
    Header: 'Instance Public IP',
    accessor: 'PublicIpAddress',
  },
  {
    Header: 'Instance Private IP',
    accessor: 'PrivateIpAddress',
  },
];
