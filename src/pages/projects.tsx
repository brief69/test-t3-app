import { useQuery, type UseQueryResult } from '@tanstack/react-query';
import { getProjects } from '../api/projects'; // パスを修正しました

interface Project {
  id: string;
  name: string;
}
export default function Projects() {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
  const { data: projects, isLoading, error }: UseQueryResult<Project[], Error> = useQuery<Project[], Error>(['getProjects'], getProjects, {});
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  return (
    <div>
      {projects?.map((project) => (
        <div key={project.id}>{project.name}</div>
      ))}
    </div>
  );
}