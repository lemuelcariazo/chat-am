import { NAV } from "@/types/types";
import Layout from "@/components/Layout";
import Link from "next/link";

const User: React.FC<NAV> = () => {
  return (
    <Layout>
      Welcome User
      <Link href={"/"}>goto Home</Link>
    </Layout>
  );
};
export default User;
