// Listing Element
document.getElementById('resumeForm')?.addEventListener('submit', function(event) {
   event.preventDefault();

   //Profile Picture Input
   const profilePictureInput = document.getElementById('profilePicture') as HTMLInputElement;

   // Type Assertion
   const nameElement = document.getElementById('name') as HTMLInputElement;
   const emailElement = document.getElementById('email') as HTMLInputElement;
   const phoneElement = document.getElementById('phone') as HTMLInputElement;
   const educationElement = document.getElementById('education') as HTMLInputElement;
   const skillsElement = document.getElementById('skills') as HTMLInputElement;
   const experienceElement = document.getElementById('experience') as HTMLInputElement;

   // **
   const usernameElement = document.getElementById('username') as HTMLInputElement;

   if(profilePictureInput && nameElement && emailElement && phoneElement && educationElement && skillsElement && experienceElement){
      
      // **
      usernameElement
// ******************************************** //
      const name = nameElement.value;
      const email = emailElement.value;
      const phone = phoneElement.value;
      const education = educationElement.value;
      const skills = skillsElement.value;
      const experience = experienceElement.value;
// ******************************************* //



   // Profile Output
   const profilePictureFile = profilePictureInput.files?.[0]
   const profilePictureURL = profilePictureFile ? URL.createObjectURL(profilePictureFile) : '';

   // Create Resume Output
   const resumeHTML = `
   <h2> Resume </h2>
   ${profilePictureURL ? `<img src = "${profilePictureURL}" alt ="Profile Picture" class = "profilePicture">` : ''}
   <p><strong> Name: <strong> ${name}</p>
   <p><strong> Email: <strong> ${email}</p>
   <p><strong> Phone: <strong> ${phone}</p>
   
   <h3> Education </h3>
   <p> ${education} </p>

   <h3> Skills </h3>
   <p> ${skills} </p>

   <h3> Experience </h3>
   <p> ${experience} </p>`;

   // **************************************** //

   // Display the resume in the output container
   const resumeOutputElement = document.getElementById('resumeOutput');
   if (resumeOutputElement) {
      resumeOutputElement.innerHTML = resumeHTML;
      resumeOutputElement.classList.remove ('hidden');

   // Create Container For Buttons
   const buttonsContainer = document.createElement('div');
   buttonsContainer.id = 'buttonsContainer';
   resumeOutputElement.appendChild(buttonsContainer);

   // Add Download PDF Button
   const downloadButton = document.createElement('button');
   downloadButton.textContent = 'Download as PDF';
   downloadButton.addEventListener("click", () => {
      window.print(); // Open the print dialog, allowing the user to save as PDF.
   });
   buttonsContainer.appendChild(downloadButton);

   //Add Shareable Link Button
   const shareableLinkButton = document.createElement("button");
   shareableLinkButton.textContent = 'Copy Link';
   shareableLinkButton.addEventListener("click", async () => {
      try {
         // Create a unique Shareable Link
         const shareableLink = `https://yourdomain.com/resumes/${name.replace(/\ s + /g,'')}_cv.html`;

         // Use Clipboard API to copy the Shareable Link
         await navigator.clipboard.writeText(shareableLink);
         alert("Failed to Copy Link to Clipboard");
      } catch(err) {
      console.error("Faild to Copy Link: " , err);
      alert("Faild to Copy Link to Clipboard, Please try again.")
      }
   });
   buttonsContainer.appendChild(shareableLinkButton);
   } else{
      console.error("Resume output container not found");    
   }
} else {
   console.error("Form element are missing!");
}
});
