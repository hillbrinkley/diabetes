
import { db } from "@/db/db";
import { insulin, carbs, bloodsugar } from "../db/schema"; // Adjust path as needed

export async function submitData(type: "bs" | "carbs" | "insulin", formData: any) {
  const data = Object.fromEntries(formData.entries());
  const { number } = data;

  if (!number) {
    throw new Error("Value is required.");
  }

  switch (type) {
    case "insulin":
      await db.insert(insulin).values({

        number,
        type: data.insulinType || "short", // Adjust as needed for insulin type
      });
      break;

    case "carbs":
      await db.insert(carbs).values({

        number,
      });
      break;

    case "bs":
      await db.insert(bloodsugar).values({

        number,
      });
      break;

    default:
      throw new Error("Invalid type.");
  }
}
