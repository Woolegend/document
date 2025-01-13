interface UtilsWrap {
  isPending: boolean;
  onClickClose: () => void;
  onClickSubmit: () => void;
}

export default function UtilsWrap({
  isPending = false,
  onClickClose,
  onClickSubmit,
}: UtilsWrap) {
  return (
    <fieldset className="flex bg-black text-white fixed bottom-0 left-0 right-0">
      <div className="grow">
        <button
          className="p-3 hover:underline"
          type="button"
          onClick={onClickClose}
        >
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
          onClick={onClickSubmit}
        >
          제출하기
        </button>
      </div>
    </fieldset>
  );
}
