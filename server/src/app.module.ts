import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import configuration from './configuration';
import { TrackModule } from './track/track.module';
import { FileModule } from './file/file.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ServeStaticModule } from '@nestjs/serve-static';
import { resolve } from 'path';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: resolve(__dirname, 'static'),
    }),
    ConfigModule.forRoot({ isGlobal: true, load: [configuration] }),
    TrackModule,
    FileModule,
    MongooseModule.forRootAsync({
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get<string>('MONGO_DATA'),
      }),
    }),

    // MongooseModule.forFeature([{ name: LogMongo.name, schema: LogSchema }]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
