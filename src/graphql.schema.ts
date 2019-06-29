/** ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* eslint-disable */
export interface Issue {
  id: number;
  number: string;
  notes: string;
  publication_date: string;
  key_date: string;
  series?: Series;
  stories?: Story[];
}

export interface IQuery {
  issue(id: number): Issue | Promise<Issue>;
  series(id: number): Series | Promise<Series>;
  story(id: number): Story | Promise<Story>;
}

export interface Series {
  id: number;
  name: string;
  notes: string;
  year_began: number;
  year_ended?: number;
  issues?: Issue[];
}

export interface Story {
  id: number;
  title: string;
  notes: string;
  feature: string;
  script: string;
  pencils: string;
  inks: string;
  colors: string;
  letters: string;
  genre: string;
  characters: string;
  synopsis: string;
  issue?: Issue;
  type?: StoryType;
}

export interface StoryType {
  id: number;
  name: string;
}
