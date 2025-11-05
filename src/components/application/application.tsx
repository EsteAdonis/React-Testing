export const Application = () => {
	return (
		<>
			<h1>Job Application form</h1>
			<h2>Section 1</h2>
			<p>All fields are mandatory</p>
			<form action="" style={{display: "flex", flexDirection: "column", marginTop: "20px", backgroundColor: "darkgray"}}>
				<div>
					<label htmlFor="name">Name</label>
					<input type="text" id="name" placeholder="Type your name" />
				</div>
				<div>
					<label htmlFor="bio">Bio </label>
					<textarea name="bio" id="bio" />
				</div>
				<div>
					<label htmlFor="job-location">Job location</label>
					<select name="" id="job-location">
						<option value="">Select a country</option>
						<option value="US">United States</option>
						<option value="GB">United Kindon</option>
						<option value="CA">Canada</option>
						<option value="IN">India</option>
						<option value="AU">Australia</option>
					</select>
					<div>
						<label>
							<input type="checkbox" id="terms" />I agree to the terms and conditions
						</label>
					</div>
				</div>
				<button type="button">Submit</button>
			</form>
		</>
	)
}