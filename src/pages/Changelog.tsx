import BaseLayout from '../layouts/BaseLayout'

export default function Changelog() {
  return (
    <BaseLayout pageTitle="Changelog">
      <div className="container-xl">
        <div className="row row-cards">
          <div className="col-lg-12">
            <div className="card card-lg">
              <div className="card-body">
                <div className="prose">
                  <h1>Changelog</h1>
                  <p>All notable changes to this project will be documented in this file.</p>

                  <h2>1.4.0</h2>
                  <h3>Minor Changes</h3>
                  <ul>
                    <li>Enhance button and hover animations</li>
                    <li>Improve breadcrumb styles</li>
                    <li>Add new Tabler Illustrations</li>
                  </ul>
                  <h3>Patch Changes</h3>
                  <ul>
                    <li>Update class names from `*-left`, `*-right` to `*-start`, `*-end`</li>
                    <li>Fix relative line heights in buttons</li>
                    <li>Remove `license_key` option from HugeRTE init object</li>
                    <li>Add different favicon to development environment</li>
                    <li>Update Bootstrap to v5.3.7</li>
                    <li>Update CSS calculations to use `calc()`</li>
                    <li>Fix list group item hoverable only with `.list-group-hoverable` class</li>
                    <li>Fix `.pagination-link` hover styles to non-active items</li>
                  </ul>

                  <h2>1.3.2</h2>
                  <h3>Patch Changes</h3>
                  <ul>
                    <li>Fix README file in core package</li>
                  </ul>

                  <h2>1.3.1</h2>
                  <h3>Patch Changes</h3>
                  <ul>
                    <li>Fix README file in core package</li>
                  </ul>

                  <h2>1.3.0</h2>
                  <h3>Minor Changes</h3>
                  <ul>
                    <li>Add FullCalendar integration</li>
                    <li>Add new charts to dashboard pages</li>
                    <li>Add new form layout page</li>
                  </ul>
                  <h3>Patch Changes</h3>
                  <ul>
                    <li>Update illustrations to v1.7</li>
                    <li>Add SRI hashes to scripts and styles</li>
                    <li>Fix colour picker preview page not displaying correctly</li>
                    <li>Update icons to v3.31.0</li>
                    <li>Enhance pagination component with new styles</li>
                    <li>Add "text features" menu item</li>
                    <li>Refactor SCSS variable names for shadows</li>
                    <li>Correct `aria-label` of app menu link</li>
                    <li>Fix some marketing site rows overflowing on mobile</li>
                    <li>Improve card footer layout and enhance entry display format in invoices</li>
                    <li>Fix color badge in navbar menu</li>
                    <li>Add clipboard functionality to Tabler documentation</li>
                    <li>Fix colour swatches on small screens</li>
                    <li>Add missing `tw` entry in `flags.json`</li>
                    <li>Delete missing demo RTL style</li>
                    <li>Enhance dropdown components for better accessibility</li>
                    <li>Remove unnecessary `!important` from body padding</li>
                    <li>Fix missing border-radius to `.card-header-tabs`</li>
                    <li>Fix FAQ accordion structure</li>
                  </ul>

                  <h2>1.2.0</h2>
                  <h3>Minor Changes</h3>
                  <ul>
                    <li>Add gradient background utilities</li>
                    <li>Add new apps card with brand icons in navbar</li>
                    <li>Replaced TinyMCE with HugeRTE to address license violation</li>
                    <li>Update Bootstrap to version 5.3.5</li>
                    <li>Add theme settings wizard</li>
                    <li>Add steps light colors</li>
                    <li>Add Turbo library integration</li>
                  </ul>

                  <h2>1.1.0</h2>
                  <h3>Minor Changes</h3>
                  <ul>
                    <li>Enable `scrollSpy` in `countup` module</li>
                    <li>Refactor SCSS files to replace divide function with calc</li>
                    <li>Add Segmented Control component</li>
                    <li>Add new text features page with mentions: user, color and app</li>
                    <li>Add Scroll Spy page</li>
                    <li>Add Signature Pad feature and signatures page</li>
                    <li>Update color utility classes and replace background colors in pricing table</li>
                    <li>Refactored the project into a monorepo, removed Gulp, and introduced a new, more efficient build process</li>
                    <li>Add documentation for segmented control component</li>
                    <li>Add new payment provider (Troy)</li>
                    <li>Add selectable table functionality with active background color</li>
                    <li>Refactor badge styles, remove Bootstrap styles</li>
                    <li>Refactor alert component styles and markup, remove Bootstrap styles</li>
                    <li>Refactor accordion component styles and markup, remove Bootstrap styles</li>
                  </ul>

                  <h2>1.0.0 - 2025-01-28</h2>
                  <h3>Minor Changes</h3>
                  <ul>
                    <li>Add new `Tag` component</li>
                    <li>Add customizable Star Ratings component</li>
                    <li>Add `flags.html` page with list of all flags</li>
                    <li>Update CSS class from `text-muted` to `text-secondary`</li>
                    <li>Add `alerts.html` page</li>
                    <li>Change primary color value to new Tabler branding</li>
                    <li>Unify dark mode with latest Bootstrap API</li>
                    <li>New Chat component</li>
                    <li>Add new color picker component</li>
                    <li>Update Tabler Icons</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </BaseLayout>
  )
}
