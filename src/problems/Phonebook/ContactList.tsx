import type { ContactListType } from './interface';

const ContactList = ({ contactList }: { contactList: ContactListType[] }) => {
  return (
    <div className='py-8 pl-12'>
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
      {contactList.length > 0 && (
        <span className='text-text-secondary pl-4 text-xs'>
          {contactList.length} contacts
        </span>
      )}
    </div>
  );
};

export default ContactList;
