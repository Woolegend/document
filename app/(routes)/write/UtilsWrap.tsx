interface UtilsWrap {
  isPending: boolean;
}

export default function UtilsWrap({ isPending = false }: UtilsWrap) {
  return (
    <fieldset className="flex bg-black text-white fixed bottom-0 left-0 right-0">
      <div className="grow">
        <button className="p-3 hover:underline" type="button">
          나가기
        </button>
      </div>
      <div>
        <button className="p-3 hover:underline" type="button">
          임시저장
        </button>
        <button
          disabled={isPending}
          className="p-3 hover:underline"
          type="submit"
        >
          제출하기
        </button>
      </div>
    </fieldset>
  );
}
