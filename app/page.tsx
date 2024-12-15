import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { submitData } from "./action";

export default async function Main() {
 const session = await auth();
 if (!session) {
  redirect("/api/auth/signin?callbackUrl=/");
 }

 const lastBloodSugar = "92";
 return (
  <main className="p-4">
   <h1 className="text-lg font-bold">Brink's Diabetes App</h1>
   <div>
    Latest Bloodsugar: <span className="italic font-bold">{lastBloodSugar}</span>
   </div>

   <form
    className="bg-gray-900 p-2 my-10"
    action={async (formData) => {
     "use server";
     try {
      const type = formData.get("type") as string; // Safely cast to string
      if (type !== "bs" && type !== "carbs" && type !== "insulin") {
       throw new Error("Invalid type.");
      }
      await submitData(type, formData);
     } catch (error) {
      console.error(error);
      throw error;
     }
    }}
   >
    <label htmlFor="type">Choose a type:</label>
    <br />
    <select
     name="type"
     id="type"
     className="block w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-gray-900 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100 dark:focus:border-blue-400 dark:focus:ring-blue-400"
    >
     <option value="insulin">Insulin</option>
     <option value="carbs">Carbs</option>
     <option value="bs">Bloodsugar</option>
    </select>

    <br />

    <div id="insulinTypeField" className="hidden">
     <label htmlFor="insulinType">Insulin Type:</label>
     <br />
     <select
      name="insulinType"
      id="insulinType"
      className="block w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-gray-900 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100 dark:focus:border-blue-400 dark:focus:ring-blue-400"
     >
      <option value="short">Short</option>
      <option value="long">Long</option>
     </select>
     <br />
    </div>

    <label htmlFor="number">Value</label>
    <br />
    <input
     name="number"
     type="number"
     className="block w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-gray-900 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100 dark:focus:border-blue-400 dark:focus:ring-blue-400"
    />
    <br />
    <button
     type="submit"
     className="inline-block rounded-md bg-blue-500 px-4 py-2 text-white shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:bg-blue-400 dark:hover:bg-blue-500 dark:focus:ring-blue-400 dark:focus:ring-offset-gray-800"
    >
     Submit
    </button>
   </form>
  </main>
 );
}
