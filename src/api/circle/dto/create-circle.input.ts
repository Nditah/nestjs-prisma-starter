import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateCircleInput {
  @Field(() => String, { description: 'Name of the Circle' })
  name: string;

  @Field(() => String, { description: 'Circle title ' })
  title: string;

  @Field(() => String, { description: 'Circle logo ' })
  logo: string;

  @Field(() => String, { description: 'Circle description ' })
  description: string;
}
