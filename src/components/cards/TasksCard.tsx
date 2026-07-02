// src/components/cards/TasksCard.tsx
// Matches shared/includes/cards/tasks.html
// table-selectable + form-check-input checkbox style matching Invoice card
import { Icon } from '../ui/Icon'
import { Avatar } from '../ui/Avatar'
import type { Task, Person } from '../../types'

interface TasksCardProps {
  tasks?: Task[]
  people?: Person[]
}

export function TasksCard({ tasks = [], people = [] }: TasksCardProps) {
  return (
    <div className="card">
      <div className="card-header">
        <h3 className="card-title">Tasks</h3>
      </div>
      <div className="table-responsive">
        <table className="table table-selectable card-table table-vcenter">
          <tbody>
            {tasks.slice(0, 6).map((task, index) => {
              const person = people[task.assigned_to ? task.assigned_to % (people.length || 1) : index % (people.length || 1)]
              return (
                <tr key={index}>
                  {/* Checkbox - same style as InvoicesCard */}
                  <td className="w-1 pe-0">
                    <input
                      type="checkbox"
                      className="form-check-input m-0 align-middle table-selectable-check"
                      aria-label="Select task"
                      defaultChecked={task.checked}
                    />
                  </td>
                  {/* Task name */}
                  <td className="w-100">
                    <a href="#" className="text-reset">{task.name}</a>
                  </td>
                  {/* Due date */}
                  {task.due_date && (
                    <td className="text-nowrap text-secondary">
                      <Icon icon="calendar" className="me-1" />
                      {task.due_date}
                    </td>
                  )}
                  {/* Subtask progress */}
                  {task.subtasks && (
                    <td className="text-nowrap">
                      <a href="#" className="text-secondary">
                        <Icon icon="check" className="me-1" />
                        {task.subtasks.filter(s => s.done).length}/{task.subtasks.length}
                      </a>
                    </td>
                  )}
                  {/* Messages */}
                  {task.comments !== undefined && (
                    <td className="text-nowrap">
                      <a href="#" className="text-secondary">
                        <Icon icon="message" className="me-1" />
                        {task.comments}
                      </a>
                    </td>
                  )}
                  {/* Avatar */}
                  <td>
                    <Avatar
                      person={person}
                      placeholder={person?.full_name?.split(' ').map(n => n[0]).join('')}
                      size="sm"
                    />
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}
