import "dotenv/config";
import { db } from "./src/drizzle/db.ts";
import { projects } from "./src/drizzle/schema.ts";
import { eq } from "drizzle-orm";

interface Project {
  name: string;
  description?: string | null;
  userId: string;
}

export async function createProject(
  project: Project
): Promise<Project | { message: string }> {
  try {
    const [newProject] = await db.insert(projects).values(project).returning();
    return newProject;
  } catch {
    return { message: `Error creating project` };
  }
}

export async function getAllProjects(): Promise<
  Project[] | { message: string }
> {
  try {
    const projectsData = await db.select().from(projects);
    return projectsData;
  } catch {
    return { message: `Error getting all projects` };
  }
}

export async function getProject(
  id: string
): Promise<Project | { message: string }> {
  try {
    const [project] = await db
      .select()
      .from(projects)
      .where(eq(projects.id, id));
    return project;
  } catch {
    return { message: `Error getting project` };
  }
}

export async function getProjectsByUserId(
  userId: string
): Promise<Project[] | { message: string }> {
  try {
    const projectsData = await db
      .select()
      .from(projects)
      .where(eq(projects.userId, userId));
    return projectsData;
  } catch {
    return { message: `Error getting projects by user id` };
  }
}

export async function updateProject(
  id: string,
  project: Partial<Project>
): Promise<{ message: string; project: Project[] } | { message: string }> {
  try {
    const updatedProject = await db
      .update(projects)
      .set(project)
      .where(eq(projects.id, id))
      .returning();

    if (!updatedProject?.length) {
      return { message: "Project not found" };
    }
    return {
      message: "Project updated successfully",
      project: updatedProject,
    };
  } catch {
    return { message: `Error updating project` };
  }
}

export async function deleteProject(
  id: string
): Promise<{ message: string; project: Project[] } | { message: string }> {
  try {
    const [project] = await db
      .select()
      .from(projects)
      .where(eq(projects.id, id));

    if (!project) {
      return { message: "Project not found" };
    }

    const deletedProject = await db
      .delete(projects)
      .where(eq(projects.id, id))
      .returning();

    if (!deletedProject?.length) {
      return { message: "Project not found" };
    }

    return { message: "Project deleted successfully", project: deletedProject };
  } catch {
    return { message: `Error deleting project` };
  }
}
