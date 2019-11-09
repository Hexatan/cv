<template>
    <div class="home container">
        <contact></contact>
        <hr>
        <objective></objective>
        <hr>
        <skills></skills>
        <hr>
        <work-history></work-history>
        <hr>
        <qualifications></qualifications>
        <hr>
        <community-experience></community-experience>
        <hr>
        <referees></referees>
        <hr>
        <personal-statement></personal-statement>
    </div>
</template>

<script>
    import Contact from "../components/Contact";
    import Objective from "../components/Objective";
    import Skills from "../components/Skills";
    import WorkHistory from "../components/WorkHistory";
    import Qualifications from "../components/Qualifications";
    import CommunityExperience from "../components/CommunityExperience";
    import Referees from "../components/Referees";
    import PersonalStatement from "../components/PersonalStatement";

    export default {
        name: 'home',
        components: {
            PersonalStatement,
            Referees, CommunityExperience, Qualifications, WorkHistory, Skills, Objective, Contact
        }
    }
</script>
