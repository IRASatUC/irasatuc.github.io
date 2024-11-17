
# Website Update Instructions

## Step 1: Install Dependencies
Run the following command to install the necessary dependencies:

```bash
npm install
```

## Step 2: Configure AWS CLI
Set up the AWS CLI by running:

```bash
aws configure
```

Provide the necessary configuration details when prompted:
- **AWS Access Key ID**
- **AWS Secret Access Key**
- **Default region name**
- **Default output format**

## Step 3: Update the Web Content
1. Navigate to the `contents` folder:

2. To add a new element to an existing list, simply follow the format of previous entries.

## Step 4: Add a New Project
To add a new project, import the `ProjectUI` component from `reusables/ProjectUI` and use the following structure:

```jsx
<ProjectUI
  BackGround(optional)="link for background video"
  BackgroundImage(optional)="link to image background"
  projectDescription(optional)="react component to render description"
  projectImage(optional)='[{title: "title of the image (optional)", src: "src of the image (required)"}]'
  projectVideo(optional)='[{title: "title of the video (optional)", src: "src of the video (required)"}]'
  Publication="react component to render the Publications section"
/>
```

- **BackGround**: (Optional) URL to the background video.
- **BackgroundImage**: (Optional) URL to the background image.
- **projectDescription**: (Optional) React component to render the project description.
- **projectImage**: (Optional) Array of image objects with:
  - `title`: (Optional) Title of the image.
  - `src`: (Required) Source of the image.
- **projectVideo**: (Optional) Array of video objects with:
  - `title`: (Optional) Title of the video.
  - `src`: (Required) Source of the video.
- **Publication**: React component to render the Publications section.

> **Note**: Ensure each new project follows this structure for consistency.

## Step 5: Publish the Update
After making your updates, you can publish the website using Amplify by running:

```bash
amplify publish
```

This will deploy the changes to your Amplify environment and make the updates live.
