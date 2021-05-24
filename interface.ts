interface car1
{
	cDetails();
	modelName();
}
class inter implements car1
{
	public cDetails()
	{
	console.log('blue colour');
	}
	public modelName()
	{
	console.log('bmw');
	}
}
let d=new inter;
d.cDetails();
d.modelName();