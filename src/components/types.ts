export type EC2Instance = {
  Name?: string;
  InstanceType: string;
  State: string;
  AvailabilityZone: string;
  PublicIpAddress: string;
  PrivateIpAddress: string;
  InstanceId: string;
};
