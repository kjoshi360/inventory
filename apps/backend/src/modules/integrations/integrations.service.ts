import { Injectable } from '@nestjs/common';
import { Kafka } from 'kafkajs';
import Redis from 'ioredis';

@Injectable()
export class IntegrationsService {
  private readonly kafka = new Kafka({
    brokers: [process.env.KAFKA_BROKERS || 'kafka:9092'],
    clientId: 'inventory-platform'
  });

  private readonly redis = new Redis(process.env.REDIS_URL || 'redis://redis:6379');

  status() {
    return {
      kafkaBroker: process.env.KAFKA_BROKERS || 'kafka:9092',
      redis: this.redis.options.host,
      note: 'Broker and cache clients are initialized for event-driven workflows.'
    };
  }

  async emitInventoryAdjusted(payload: Record<string, unknown>) {
    const producer = this.kafka.producer();
    await producer.connect();
    await producer.send({
      topic: 'inventory.adjusted',
      messages: [{ value: JSON.stringify(payload) }]
    });
    await producer.disconnect();
  }
}
