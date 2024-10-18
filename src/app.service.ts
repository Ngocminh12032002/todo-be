import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Task } from './entity/task';

@Injectable()
export class AppService {

  constructor(
    @InjectRepository(Task)
    private taskRepository: Repository<Task>,
  ) {}

  async create(task: Task): Promise<Task> {
    return this.taskRepository.save(task);
  }

  async update(id: number, task: Partial<Task>): Promise<void> {
    return this.taskRepository.update(id, task).then(() => {});
  }

  async remove(id: number): Promise<void> {
    await this.taskRepository.delete(id);
  }

  async getAll(): Promise<Task[]> {
    return this.taskRepository.find();
  }
}
