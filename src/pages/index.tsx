import usePage from "@/utils/customHooks/usePage";
import config from "@/configs/home.config.json";

export default function Home() {
  return (
    <>
      {usePage(config.pg_Title, config.pg_description)}
    </>
  );
}
