import { ApiModelProperty } from '@nestjs/swagger';

export class CreateCatDto {

    @ApiModelProperty({ type: String, required: true })
    readonly name: string;

    @ApiModelProperty({ required: false, default: 1, type: Number })
    readonly age: number;

    @ApiModelProperty({ type: String, required: true })
    readonly breed: string;
}
