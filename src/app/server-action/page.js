// 'use client'
import { addPost, getPosts } from "@/database/postdb";
import React from "react";
import { FloppyDisk } from "@gravity-ui/icons";
import {
  Button,
  Description,
  FieldError,
  FieldGroup,
  Fieldset,
  Form,
  Input,
  Label,
  TextArea,
  TextField,
} from "@heroui/react";

import { handlePostAction } from "@/actions/postAction";

const ServerActionPage = () => {
  const posts = getPosts();

  return (
    <>
      <Form
        action={handlePostAction}
        className="w-full max-w-96 mx-auto border-zinc-500 rounded-2xl shadow-2xl my-20 p-5"
      >
        <Fieldset>
          <Fieldset.Legend>Add Post</Fieldset.Legend>
          <Description>Update your profile information.</Description>
          <FieldGroup>
            <TextField isRequired name="title">
              <Label>Title</Label>
              <Input placeholder="John Doe" />
              <FieldError />
            </TextField>
            <TextField isRequired name="body" type="text">
              <Label>Body</Label>
              <Input placeholder="john@example.com" />
              <FieldError />
            </TextField>
          </FieldGroup>
          <Fieldset.Actions>
            <Button type="submit">
              <FloppyDisk />
              Save changes
            </Button>
            <Button type="reset" variant="secondary">
              Cancel
            </Button>
          </Fieldset.Actions>
        </Fieldset>
      </Form>

      <div>
        <h1>server Action</h1>
        <div className="grid-cols-3 grid p-10 gap-5">
          {posts.map((post) => (
            <div className="border" key={post.id}>
              <h1 className="text-xl font-bold">{post.title}</h1>
              <p>{post.body}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ServerActionPage;
