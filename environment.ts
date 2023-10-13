
import { TestEnvironment } from 'jest-environment-node';
import type {JestEnvironmentConfig, EnvironmentContext } from '@jest/environment';
import { Circus as JestCircus } from '@jest/types';

class CustomEnvironment extends TestEnvironment {
    constructor(config: JestEnvironmentConfig, context: EnvironmentContext) {
        super(config, context);
    }

    handleTestEvent(event: { test?: JestCircus.TestEntry, name: string, testName: string }) {
        const name = event.test ? event.test.name : event.testName;
        console.info(
            'handleTestEvent',
            event.name,
            name ? `"${event.test ? event.test.name : event.testName}"` : ''
        );
    }
}

export default CustomEnvironment;