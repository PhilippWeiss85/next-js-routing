import { useRouter } from "next/router";
import Link from "next/link";

export default function Account() {
  const router = useRouter();

  const name = ["hallo", "du", "da"];

  return (
    <>
      <h1>Account content here</h1>
      <div>
        <label>
          Username: <input type="text" />
        </label>
      </div>
      <div>
        <label>
          Password: <input type="password" />
        </label>
      </div>
      <button
        onClick={() => {
          setTimeout(() => {
            router.push("/", "test");
          }, 3000);
        }}
      >
        Login
      </button>
    </>
  );
}
