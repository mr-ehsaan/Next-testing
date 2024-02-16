'use client';
import Button from '@/components/Button';
import { MOCK_SELECT_OPTIONS } from './data';
import { FormInput } from '@/components/FormElements/FormInput';
import { FormSelect } from '@/components/FormElements/FormSelect';
import { FormTextarea } from '@/components/FormElements/FormTextarea';
import { FormCheckbox } from '@/components/FormElements/FormCheckbox';
import { AnimatedBox } from '@/components/AnimatedBox';

export const ContactUsSection = () => {
  return (
    <section className='mb-48 mt-48'>
      <AnimatedBox>
        <h2
          id='get-more-info'
          className='text-k-2xl sm:text-k-3xl mb-12 font-source-serif font-semibold leading-tight
            tracking-[-0.04em]'
        >
          Learn More About Aura Cameras
        </h2>
      </AnimatedBox>
      <AnimatedBox>
        <form className='grid gap-4'>
          <div className='grid gap-4 sm:grid-cols-2'>
            <FormInput label='First name' />
            <FormInput
              label='Last name'
              isInvalid
              defaultValue='Some Error Example'
            />
          </div>
          <FormInput label='Email' />
          <FormSelect
            label='Country'
            placeholder='Select the county'
            data={MOCK_SELECT_OPTIONS}
          />
          <FormInput label='Phone number' />
          <FormTextarea label={'Add your comment...'} minRows={7} />
          <FormCheckbox
            className='mt-2'
            label='Please text me pricing and promotional information'
          />
          <div className='mt-10'>
            <Button>Get more Info</Button>
          </div>
        </form>
      </AnimatedBox>
    </section>
  );
};
