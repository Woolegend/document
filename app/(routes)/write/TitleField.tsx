import { ChangeEvent } from "react";

interface TitleFieldProps {
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export default function TitleField({ value, onChange }: TitleFieldProps) {
  return (
    <fieldset className="p-6 bg-[#161b22]">
      <input
        className="text-4xl bg-[#161b22] focus-visible:outline-none text-[#c9d1d9]"
        id="title"
        name="title"
        type="text"
        value={value}
        onChange={onChange}
        placeholder="제목을 입력하세요"
      />
    </fieldset>
  );
}
