import type { ContactListType } from './interface';

const ContactList = ({ contactList }: { contactList: ContactListType[] }) => {
  return (
    <div className='mx-8'>
      <span className='text-center text-xl font-bold'>Contacts</span>

      <div className='mt-4 grid gap-2'>
        {contactList.length > 0 ? (
          contactList?.map((contact, contactIndex) => {
            return <span key={contactIndex}>{contact?.name}</span>;
          })
        ) : (
          <span className='text-text-secondary text-xs'>No contacts found</span>
        )}
      </div>
    </div>
  );
};

export default ContactList;
