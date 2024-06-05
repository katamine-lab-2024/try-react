import z from "zod";

// submit時に走るschema
export const formSchema = z.object({
  requiredInput: z.string().min(1, { message: "テキストを入力してください。" }),
  optionalInput: z.string(),
  requiredSelectValue: z
    .string()
    .min(1, { message: "テキストを選択してください。" }),
  optionalSelectValue: z.string()
});

// schemaの型を取得
export type FormSchema = z.infer<typeof formSchema>;
