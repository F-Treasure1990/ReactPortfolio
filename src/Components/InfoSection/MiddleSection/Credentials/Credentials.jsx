import { City, Divide, EmploymentStatus, Freelancer, Name } from "./CredentialsStyles";

const Credentials = () => {
  return (
    <>
      <Name color="textFocused">Fenton Treasure</Name>
      <City color="text">
        <span>🏡</span> Birmingham, England
      </City>
      <Freelancer color="text">
        <span>👨🏽‍💻</span> Freelancer
      </Freelancer>
      <EmploymentStatus color="textFocused">
        👔 <span>let</span> <span>employmentStatus</span>
        <span> = </span> `Seeking`
      </EmploymentStatus>
      <Divide />
    </>
  );
};
export default Credentials;
