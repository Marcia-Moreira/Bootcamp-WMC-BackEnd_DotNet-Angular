// TypeScript / Lógica:
import { Component} from '@angular/core';

interface Tarefa {
  descricao: string;
  concluida: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
  standalone: false
})
export class AppComponent {
  // Campo de texto vinculado ao input
  novaTarefaTexto: string = '';

  // Lista inicial de tarefas
  tarefas: Tarefa[] = [
    { descricao: 'Estudar Angular', concluida: false },
    { descricao: 'Fazer exercício de programação', concluida: true },
    { descricao: 'Revisar conteúdo da aula', concluida: false }
  ];

  // Adiciona nova tarefa (não permite adicionar vazia)
  adicionarTarefa(): void {
    if (this.novaTarefaTexto.trim() === '') {
      return;
    }

    this.tarefas.push({
      descricao: this.novaTarefaTexto.trim(),
      concluida: false
    });

    this.novaTarefaTexto = '';
  }

  // Remove tarefa pelo índice
  removerTarefa(index: number): void {
    this.tarefas.splice(index, 1);
  }

  // Calcula automaticamente o total de tarefas concluídas
  get totalConcluidas(): number {
    return this.tarefas.filter(t => t.concluida).length;
  }
}
