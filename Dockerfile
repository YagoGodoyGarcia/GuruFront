ARG BUILD_IMAGE=node:18-alpine
ARG RUNTIME_IMAGE=node:18-alpine

FROM $BUILD_IMAGE AS builder

WORKDIR /app

COPY package*.json ./

RUN yarn

COPY . .

ARG API_URL
ARG STORY_POINT_CUSTOM_FIELD
ARG JIRA_URL
ARG FEEDBACK_SHEET_LINK
ARG JIRA_ISSUE_IMPORTER_HELP
ARG TEST_STORY_POINT_CUSTOM_FIELD
ARG P_ANNOUNCEMENT_TEXT
ARG P_ENABLED
ARG P_LINK

ENV NEXT_PUBLIC_API_URL=$API_URL
ENV NEXT_PUBLIC_STORY_POINT_CUSTOM_FIELD=$STORY_POINT_CUSTOM_FIELD
ENV NEXT_PUBLIC_JIRA_URL=$JIRA_URL
ENV NEXT_PUBLIC_FEEDBACK_SHEET_LINK=$FEEDBACK_SHEET_LINK
ENV NEXT_PUBLIC_JIRA_ISSUE_IMPORTER_HELP=$JIRA_ISSUE_IMPORTER_HELP
ENV NEXT_PUBLIC_TEST_STORY_POINT_CUSTOM_FIELD=$TEST_STORY_POINT_CUSTOM_FIELD
ENV NEXT_PUBLIC_P_ANNOUNCEMENT_TEXT=$P_ANNOUNCEMENT_TEXT
ENV NEXT_PUBLIC_P_ENABLED=$P_ENABLED
ENV NEXT_PUBLIC_P_LINK=$P_LINK
RUN yarn build

FROM $RUNTIME_IMAGE AS runner

WORKDIR /app

COPY --from=builder /app .

ARG API_URL
ARG STORY_POINT_CUSTOM_FIELD
ARG JIRA_URL
ARG FEEDBACK_SHEET_LINK
ARG JIRA_ISSUE_IMPORTER_HELP
ARG TEST_STORY_POINT_CUSTOM_FIELD
ARG P_ANNOUNCEMENT_TEXT
ARG P_ENABLED
ARG P_LINK
ENV NEXT_PUBLIC_API_URL=$API_URL
ENV NEXT_PUBLIC_STORY_POINT_CUSTOM_FIELD=$STORY_POINT_CUSTOM_FIELD
ENV NEXT_PUBLIC_JIRA_URL=$JIRA_URL
ENV NEXT_PUBLIC_FEEDBACK_SHEET_LINK=$FEEDBACK_SHEET_LINK
ENV NEXT_PUBLIC_JIRA_ISSUE_IMPORTER_HELP=$JIRA_ISSUE_IMPORTER_HELP
ENV NEXT_PUBLIC_TEST_STORY_POINT_CUSTOM_FIELD=$TEST_STORY_POINT_CUSTOM_FIELD
ENV NEXT_PUBLIC_P_ANNOUNCEMENT_TEXT=$P_ANNOUNCEMENT_TEXT
ENV NEXT_PUBLIC_P_ENABLED=$P_ENABLED
ENV NEXT_PUBLIC_P_LINK=$P_LINK

EXPOSE 3000

CMD [ "yarn", "start" ]
