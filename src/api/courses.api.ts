// src/api/courses.api.ts
import { http } from './http'
import type { ApiResponse, Paginated } from '@/types/common.types'
import type { Curso, CreateCoursePayload } from '@/types/course.types'

export async function getCourses(page = 1, limit = 10) {
  const { data } = await http.get<ApiResponse<Paginated<Curso>>>('/cursos', { params: { page, limit } })
  return data.data
}

export async function getCourse(id: string) {
  const { data } = await http.get<ApiResponse<Curso>>(`/cursos/${id}`)
  return data.data
}

export async function createCourse(payload: CreateCoursePayload) {
  const { data } = await http.post<ApiResponse<Curso>>('/cursos', payload)
  return data.data
}

export async function updateCourse(id: string, payload: CreateCoursePayload) {
  const { data } = await http.put<ApiResponse<Curso>>(`/cursos/${id}`, payload)
  return data.data
}

export async function deleteCourse(id: string) {
  await http.delete(`/cursos/${id}`)
}
