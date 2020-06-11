import { IsNotEmpty } from 'class-validator';
import { from } from 'rxjs';
export class CreateTaskDto {
  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  description: string;
}
