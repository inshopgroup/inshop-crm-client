<template>

    <div id="content" class="site-content" tabindex="-1">
        <div class="container">
            <article class="hentry">

                <header class="entry-header">
                    <h1 class="entry-title">{{$t('menu.contacts')}}</h1>
                </header><!-- .entry-header -->

                <div class="entry-content">
                    <div class="row">
                        <!--<div class="col-sm-6">-->
                            <!--<div class="wpb_wrapper outer-bottom-xs">-->
                                <!--<h2 class="contact-page-title">Оставьте сообщение</h2>-->
                                <!--<p>Aenean massa diam, viverra vitae luctus sed, gravida eget est. Etiam nec ipsum porttitor, consequat libero eu, dignissim eros. Nulla auctor lacinia enim id mollis. Curabitur luctus interdum eleifend. Ut tempor lorem a turpis fermentum,.</p>-->
                            <!--</div>-->

                            <!--<div role="form" class="wpcf7">-->
                                <!--<div class="screen-reader-response"></div>-->
                                <!--<form action="#" method="post" class="wpcf7-form">-->

                                    <!--<div class="form-group row">-->
                                        <!--<div class="col-xs-12 col-md-6">-->
                                            <!--<label>Имя*</label><br />-->
                                            <!--<span class="wpcf7-form-control-wrap first-name">-->
                                                <!--<input type="text" name="first-name" value="" size="40" class="wpcf7-form-control input-text" aria-required="true" aria-invalid="false" />-->
                                            <!--</span>-->
                                        <!--</div>-->

                                        <!--<div class="col-xs-12 col-md-6">-->
                                            <!--<label>Фамилия*</label><br />-->
                                            <!--<span class="wpcf7-form-control-wrap last-name">-->
                                                <!--<input type="text" name="first-name" value="" size="40" class="wpcf7-form-control input-text" aria-required="true" aria-invalid="false" />-->
                                            <!--</span>-->
                                        <!--</div>-->
                                    <!--</div>-->

                                    <!--<div class="form-group">-->
                                        <!--<label>Тема</label><br />-->
                                        <!--<span class="wpcf7-form-control-wrap subject">-->
                                            <!--<input type="text" name="subject" value="" size="40" class="wpcf7-form-control input-text" aria-invalid="false" />-->
                                        <!--</span>-->
                                    <!--</div>-->

                                    <!--<div class="form-group">-->
                                        <!--<label>Тект сообщения</label><br />-->
                                        <!--<span class="wpcf7-form-control-wrap your-message">-->
                                            <!--<textarea name="your-message" cols="40" rows="10" class="wpcf7-form-control input-text wpcf7-textarea" aria-invalid="false" style="resize: none"></textarea>-->
                                        <!--</span>-->
                                    <!--</div>-->

                                    <!--<div class="form-group clearfix">-->
                                        <!--<p><input type="submit" value="Отправить" class="wpcf7-form-control wpcf7-submit" /></p>-->
                                    <!--</div>-->
                                <!--</form>-->
                            <!--</div>-->
                        <!--</div>&lt;!&ndash; .col &ndash;&gt;-->

                        <div class="store-info store-info-v2 col-sm-6 col-md-6 col-md-offset-3">
                            <div class="vc_column-inner ">
                                <div class="wpb_wrapper">

                                    <div class="inner-left-xs">
                                        <div class="wpb_wrapper">
                                            <h2 class="contact-page-title">Наш адресс</h2>
                                            <p>
                                                Inshop eCommerce <br><br>

                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div><!-- .col -->
                    </div><!-- .row -->
                </div><!-- .entry-content -->
            </article><!-- #post-## -->
        </div><!-- .col-full -->
    </div>
</template>

<script>
export default {
    head: {
        bodyAttrs: {
            class: 'contact left-sidebar'
        }
    }
}
</script>