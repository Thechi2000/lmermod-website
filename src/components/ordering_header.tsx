import { Dispatch, SetStateAction } from "react";

export interface Ordering {
  column: string;
  asc: boolean;
}

export function compare(a: any, b: any, ordering: Ordering | null): number {
  var res = 0;

  if (ordering) {
    var acol = a[ordering.column],
      bcol = b[ordering.column];

    if (acol === undefined && bcol === undefined) {
      res = 0;
    } else if (acol === undefined) {
      res = ordering.asc ? 1 : -1;
    } else if (bcol === undefined) {
      res = ordering.asc ? -1 : 1;
    } else if (acol == bcol) {
      res = 0;
    } else if (ordering.asc) {
      res = acol < bcol ? 1 : -1;
    } else {
      res = acol > bcol ? 1 : -1;
    }

    console.log(
      `comparing ${a[ordering.column]} and ${b[ordering.column]}: ${res} with ordering: ${JSON.stringify(ordering)}`
    );
  }

  return res;
}

export default function OrderingHeader({
  column,
  setOrdering,
  ordering,
}: {
  column: string;
  setOrdering: Dispatch<SetStateAction<Ordering | null>>;
  ordering: Ordering | null;
}) {
  return (
    <div
      onClick={() => {
        if (ordering && ordering.column == column.toLocaleLowerCase()) {
          setOrdering({ column: column.toLocaleLowerCase(), asc: !ordering.asc });
        } else {
          setOrdering({ column: column.toLocaleLowerCase(), asc: false });
        }
      }}
    >
      <p>{column}</p>
      <div
        className={
          "arrow " +
          (ordering && ordering.column == column.toLocaleLowerCase() ? (ordering.asc ? "up" : "down") : "hidden")
        }
      />
    </div>
  );
}
