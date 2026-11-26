---
tipo: competenza
area: fisica
corsi: [Quantum physics]
livello: [triennale]
aliases: ["anomalous Zeeman effect", "effetto Paschen-Back", "Paschen-Back effect", "fattore giromagnetico", "gyromagnetic factor", "g = 2", "Zeeman con spin"]
tags: [competenza, area/fisica]
---

# Effetto Zeeman anomalo

> Includendo il momento magnetico di spin, $H_\mu=\frac{eB}{2m_ec}(L_3+gS_3)$ con $g=2$: in campi forti i livelli sono $E_n+\mu_BB(m+2m_s)$ (Paschen-Back), in campi deboli bisogna usare la base accoppiata $|j,m_j,\ell,s\rangle$ e si ottiene $E_n+\mu_BBm_j\frac{2\ell+1\pm1}{2\ell+1}$.

## Definizione / enunciato
**Primo schema (numeri quantici $\ell,m,s,m_s$):** gli spinori $\psi_{n\ell m}|s,m_s\rangle$ diagonalizzano $H_0+\frac{eB}{2m_ec}(L_3+gS_3)$:
$$E_n(m,m_s)=E_n+\frac{e\hbar B}{2m_ec}(m+gm_s),\quad g=2.$$
In campi forti riproduce i livelli osservati (**effetto Paschen-Back**), ma con le regole $\Delta m_s=0$, $\Delta m=0,\pm1$ le transizioni sono le stesse dello Zeeman normale.
**Secondo schema ($j,m_j,\ell,s$):** l'accoppiamento spin-orbita rende necessari gli osservabili $J^2,J_3,L^2,S^2$. Si scrive $H_0+H_\mu=H_0+\frac{eB}{2m_ec}(J_3+S_3)$; $J_3$ è diagonale, $S_3$ si tratta al primo ordine perturbativo nella base $|j=\ell\pm\frac12,m_j\rangle$.

## Formule chiave
$$\langle S_3\rangle_{j=\ell-1/2}=-\frac{\hbar m_j}{2\ell+1},\qquad \langle S_3\rangle_{j=\ell+1/2}=+\frac{\hbar m_j}{2\ell+1}$$
$$E_n(\ell-\tfrac12,m_j)=E_n+\mu_BBm_j\frac{2\ell}{2\ell+1},\qquad E_n(\ell+\tfrac12,m_j)=E_n+\mu_BBm_j\frac{2\ell+2}{2\ell+1}$$

## Intuizione
L'energia magnetica dipende da $\vec L+2\vec S$, che non è parallelo a $\vec J$: in campo debole conta la sua proiezione media su $\vec J$, diversa per $j=\ell\pm\frac12$; nascono così livelli con spaziature frazionarie che spiegano le righe "anomale".

## Come si usa
Esempio $n=2$, $\ell=1$ (`2022_QP.pdf` p. 162): $E_2\pm\frac13\mu_BB$ per $j=\frac12$; $E_2+\mu_BB(\pm\frac23,\pm2)$ per $j=\frac32$; per $\ell=0$ si ha $E_n\pm\mu_BB$. Con le regole $\Delta\ell=\pm1$, $\Delta m_j=0,\pm1$ le transizioni previste coincidono con quelle osservate. Il calcolo di $\langle S_3\rangle$ usa $|\alpha_\pm|^2,|\beta_\pm|^2$ della composizione dei momenti angolari (pp. 160-161).

## Nei corsi
- **Quantum physics** (triennale): §13.2 della dispensa di V. Penna. Fonti: `triennale/ANNO 2/quantum phisics/2022_QP.pdf` (pp. 156-162).

## Prerequisiti
- [[Effetto Zeeman normale]]: caso senza spin
- [[Matrici di Pauli]]: momento magnetico di spin
- [[Composizione dei momenti angolari]]: base |j, m_j, ℓ, s⟩ e coefficienti α±, β±
- [[Teoria delle perturbazioni stazionarie]]: correzione al primo ordine ⟨S₃⟩

## Porta a
- Nessuno.

## Collegati
- [[Accoppiamento spin-orbita]]: motiva il cambio di base
- [[Numeri quantici]]: magnetone di Bohr e numero di spin
