import Hello from './components/Hello';
import { getFullNames, avgTasks, userCount, topPerformers } from './logic/queries';

export default function App() {
  return (
    <main style={{ padding: '20px' }}>
      <h1>Dashboard de Datos</h1>
      <Hello name="Freddy Josue" />
      
      <section>
        <p><strong>Total de usuarios:</strong> {userCount}</p>
        <p><strong>Promedio de tareas:</strong> {avgTasks.toFixed(1)}</p>
      </section>

      <section style={{ marginTop: '20px', border: '1px solid #ccc', padding: '10px' }}>
        <h2>Usuarios con más de 10 tareas (Top Performers):</h2>
        <ul>
          {topPerformers.map((u) => (
            <li key={u.id}>
              {u.firstName} {u.lastName} - {u.tasks} tareas
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}