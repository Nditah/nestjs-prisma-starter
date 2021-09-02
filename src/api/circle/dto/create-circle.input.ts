import { InputType, Field } from '@nestjs/graphql';
import { IsNotEmpty } from 'class-validator';

@InputType()
export class CreateCircleInput {
  @IsNotEmpty()
  @Field(() => String, { description: 'Name of the Circle' })
  name: string;

  @IsNotEmpty()
  @Field(() => String, { description: 'Circle title ' })
  title: string;

  @IsNotEmpty()
  @Field(() => String, { description: 'Circle logo ' })
  logo: string;

  @IsNotEmpty()
  @Field(() => String, { description: 'Circle description ' })
  description: string;
}
