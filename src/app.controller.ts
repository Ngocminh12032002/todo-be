import { Controller, Post, Put, Delete, Body, Param, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { Task } from './entity/task';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  create(@Body() task: Task): Promise<Task> {
    return this.appService.create(task);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() task: Partial<Task>): Promise<void> {
    return this.appService.update(id, task);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.appService.remove(id);
  }

  @Get()
  findAll(): Promise<Task[]> {
    return this.appService.getAll();
  }
}
