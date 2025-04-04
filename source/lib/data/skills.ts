import type { KebabCase } from "type-fest";

/**
 * Defines a skill with the given name and data.
 *
 * @param data - The data for the skill.
 * @returns An object representing the defined skill.
 */
function defineSkill<const Name extends string, const Tags extends string[]>(
  name: Name,
  ...tags: Tags
) {
  const skillsSubDir = "skills";
  const filename = name.toLowerCase().replace(" ", "-") as KebabCase<
    Lowercase<Name>
  >;

  return {
    name,
    tags,

    i18nKey: filename,
    icon: `${skillsSubDir}/${filename}` as const,
  };
}

// Many of these are not used.
// But I initially collected a lot of icons to use for the skills.
// So I just kept them in case I want to use them later.

/** A list with data of our skills. */
export const skills = [
  defineSkill("AWS"),
  defineSkill("C++"),
  defineSkill("Python"),
  defineSkill("JavaScript"),
  defineSkill("TypeScript"),
  defineSkill("Bash"),
  defineSkill("Nix"),
  defineSkill("Rust"),
  defineSkill("HTML5"),
  defineSkill("CSS"),
  defineSkill("PHP"),
  defineSkill("Unity"),
  defineSkill("Unreal Engine"),
  defineSkill("Godot"),
  defineSkill("GDScript"),
  defineSkill("React Native"),
  defineSkill("React"),
  defineSkill("Next.js"),
  defineSkill("Phaser"),
  defineSkill("Svelte"),
  defineSkill("NodeJS"),
  defineSkill("Deno"),
  defineSkill("Astro"),
  defineSkill("TailwindCSS"),
  defineSkill("ThreeJS"),
  defineSkill("PixiJS"),
  defineSkill("Supabase"),
  defineSkill("MongoDB"),
  defineSkill("MySQL"),
  defineSkill("NGINX"),
  defineSkill("Kubernetes"),
  defineSkill("Terraform"),
  defineSkill("Github"),
  defineSkill("Blender"),
  defineSkill("Photoshop"),
  defineSkill("Illustrator"),
  defineSkill("Figma"),
  defineSkill("Framer"),
  defineSkill("Git"),
  defineSkill("Docker"),
  defineSkill("Communication"),
  defineSkill("Analytical Thinking"),
  defineSkill("Teamwork"),
] as const;

/** The list with all the skill names. */
export type SkillName = (typeof skills)[number]["name"];
