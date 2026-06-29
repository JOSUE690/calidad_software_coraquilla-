// src/logic/queries.ts

export const users = [
  { id: 1, firstName: "Freddy", lastName: "Josue", tasks: 5 },
  { id: 2, firstName: "Maria", lastName: "Gomez", tasks: 12 },
  { id: 3, firstName: "Carlos", lastName: "Perez", tasks: 8 },
];

// 1. Concatenar nombres (como el SELECT CONCAT en SQL)
export const getFullNames = users.map(u => `${u.firstName} ${u.lastName}`);

// 2. Filtrar usuarios (como el WHERE en SQL)
export const getActiveUsers = users.filter(u => u.tasks > 7);

// 3. Contar usuarios (COUNT)
export const userCount = users.length;

// 4. Calcular promedio (AVG)
export const avgTasks = users.reduce((acc, u) => acc + u.tasks, 0) / users.length;

// 5. Encontrar máximo y mínimo (MAX / MIN)
export const maxTasks = Math.max(...users.map(u => u.tasks));
export const minTasks = Math.min(...users.map(u => u.tasks));

// 6. NUEVO: Filtro para usuarios con más de 10 tareas
export const topPerformers = users.filter(u => u.tasks > 10);