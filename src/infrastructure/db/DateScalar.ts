import { CustomScalar, Scalar } from "@nestjs/graphql";
import { Kind } from "graphql";

@Scalar("Date")
export class DateScalar implements CustomScalar<number, Date> {
  public readonly description = "Date custom scalar type";

  public parseValue(value: number): Date {
    return new Date(value); // value from the client
  }

  public serialize(value: Date): number {
    return value.getTime(); // value sent to the client
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public parseLiteral(ast: any): Date {
    if (ast.kind === Kind.INT) {
      return new Date(ast.value);
    }
    throw new Error();
  }
}
