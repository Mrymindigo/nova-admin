import { LuChevronLeft, LuChevronRight } from 'react-icons/lu';
import { useTranslation } from '../../utils/services/useTranslation';
import type { PaginationProps } from '../../types/pagination';
import { Nav, PageButton } from './PaginationStyle';

export default function Pagination({ currentPage, totalPages, onPageChange }: PaginationProps) {
    const { t } = useTranslation();

    if (totalPages <= 1) return null;

    const pages = Array.from({ length: totalPages }, (_, index) => index + 1);

    return (
        <Nav aria-label={t.pagination.page}>
            <PageButton
                type="button"
                aria-label={t.pagination.previous}
                disabled={currentPage === 1}
                onClick={() => onPageChange(currentPage - 1)}
            >
                <LuChevronLeft />
            </PageButton>

            {pages.map((page) => (
                <PageButton
                    key={page}
                    type="button"
                    $active={page === currentPage}
                    aria-current={page === currentPage ? 'page' : undefined}
                    aria-label={`${t.pagination.page} ${page}`}
                    onClick={() => onPageChange(page)}
                >
                    {page}
                </PageButton>
            ))}

            <PageButton
                type="button"
                aria-label={t.pagination.next}
                disabled={currentPage === totalPages}
                onClick={() => onPageChange(currentPage + 1)}
            >
                <LuChevronRight />
            </PageButton>
        </Nav>
    );
}