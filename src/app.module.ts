import { GraphQLModule } from '@nestjs/graphql';
import { Module } from '@nestjs/common';
import { PrismaModule } from 'nestjs-prisma';
import { AppController } from './controllers/app.controller';
import { AppService } from './services/app.service';
import { AuthModule } from './resolvers/auth/auth.module';
import { UserModule } from './resolvers/user/user.module';
import { PostModule } from './resolvers/post/post.module';
import { AppResolver } from './resolvers/app.resolver';
import { DateScalar } from './common/scalars/date.scalar';
import { ConfigModule, ConfigService } from '@nestjs/config';
import config from './configs/config';
import { GraphqlConfig } from './configs/config.interface';

import { AwardModule } from './api/award/award.module';
import { BookmarkedJobModule } from './api/bookmarked-job/bookmarked-job.module';
import { BookmarkedProjectModule } from './api/bookmarked-project/bookmarked-project.module';
import { CircleModule } from './api/circle/circle.module';
import { CompanyModule } from './api/company/company.module';
import { EducationModule } from './api/education/education.module';
import { ExperienceModule } from './api/experience/experience.module';
import { ExternalCompanyModule } from './api/external-company/external-company.module';
import { ExternalJobModule } from './api/external-job/external-job.module';
import { FileItemModule } from './api/file-item/file-item.module';
import { FriendRequestModule } from './api/friend-request/friend-request.module';
import { JobModule } from './api/job/job.module';
import { JobApplicationModule } from './api/job-application/job-application.module';
import { LocationModule } from './api/location/location.module';
import { LocationCountryModule } from './api/location-country/location-country.module';
import { LocationStateModule } from './api/location-state/location-state.module';
import { MentorshipUserModule } from './api/mentorship-user/mentorship-user.module';
import { MentorshipUserFriendModule } from './api/mentorship-user-friend/mentorship-user-friend.module';
import { PictureModule } from './api/picture/picture.module';
import { ProjectModule } from './api/project/project.module';
import { ProjectApplicationModule } from './api/project-application/project-application.module';
import { ProjectPositionModule } from './api/project-position/project-position.module';
import { SettingModule } from './api/setting/setting.module';
import { TalentModule } from './api/talent/talent.module';
import { UserCircleModule } from './api/user-circle/user-circle.module';
import { ViewedJobModule } from './api/viewed-job/viewed-job.module';
import { ViewedProjectModule } from './api/viewed-project/viewed-project.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, load: [config] }),
    GraphQLModule.forRootAsync({
      useFactory: async (configService: ConfigService) => {
        const graphqlConfig = configService.get<GraphqlConfig>('graphql');
        return {
          installSubscriptionHandlers: true,
          buildSchemaOptions: {
            numberScalarMode: 'integer',
          },
          sortSchema: graphqlConfig.sortSchema,
          autoSchemaFile:
            graphqlConfig.schemaDestination || './src/schema.graphql',
          debug: graphqlConfig.debug,
          playground: graphqlConfig.playgroundEnabled,
          context: ({ req }) => ({ req }),
        };
      },
      inject: [ConfigService],
    }),
    PrismaModule.forRoot({
      isGlobal: true,
    }),
    AuthModule,
    UserModule,
    PostModule,
    AwardModule,
    BookmarkedJobModule,
    BookmarkedProjectModule,
    CircleModule,
    CompanyModule,
    EducationModule,
    ExperienceModule,
    ExternalCompanyModule,
    ExternalJobModule,
    FileItemModule,
    FriendRequestModule,
    JobModule,
    JobApplicationModule,
    LocationModule,
    LocationCountryModule,
    LocationStateModule,
    MentorshipUserModule,
    MentorshipUserFriendModule,
    PictureModule,
    ProjectModule,
    ProjectApplicationModule,
    ProjectPositionModule,
    SettingModule,
    TalentModule,
    UserCircleModule,
    ViewedJobModule,
    ViewedProjectModule,
  ],
  controllers: [AppController],
  providers: [AppService, AppResolver, DateScalar],
})
export class AppModule {}
