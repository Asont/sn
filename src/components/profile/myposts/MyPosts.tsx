import s from './MyPosts.module.css';
import Post from './posts/Post';
import {Field, Form, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import TextArea from '../../common/FormsControls/FormControls';


const MyPosts = (props: any) => {
    // @ts-ignore
    let postsElements = props.posts.map(p => <Post key={p.id} message={p.message} likesCount={p.likesCount}/>);

    const maxLength10 = maxLengthCreator(10)

    const ProfiletForm = (props: any) => {

        return (
            <Form onSubmit={props.handleSubmit}>
                <div>
                    <Field component={TextArea}  name={"newPost"} validate={[required, maxLength10]}/>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </Form>
        )
    }

    const onAddPost = (values: any) => {
        props.addPost(values.newPost)
    }

    const ProfileReduxForm = reduxForm({
        // a unique name for the form
        form: 'profilePostForm'
    })(ProfiletForm)


    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <ProfileReduxForm onSubmit={onAddPost}/>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;