---
tipo: competenza
area: fisica
corsi: [Quantum physics]
livello: [triennale]
aliases: ["Jaynes-Cummings model", "modello JC", "JC model", "interazione radiazione-materia", "atomo a due livelli", "two-level atom"]
tags: [competenza, area/fisica]
---

# Modello di Jaynes-Cummings

> Modello dell'interazione tra un modo del campo elettromagnetico (un oscillatore) e un atomo a due livelli (descritto con matrici di spin): gli autostati sono combinazioni di "atomo eccitato con $n$ fotoni" e "atomo diseccitato con $n+1$ fotoni".

## Definizione / enunciato
Il campo con vettore d'onda fissato ha energia $H_{em}=\hbar\omega a^+a$; l'atomo ha due livelli $E_{1,2}=E_0\mp\hbar\omega/2$, cioè $H_{at}=E_0I_2+\omega S_3$ (con $S_3=\frac\hbar2\sigma_3$; qui lo "spin" non è una proprietà della particella, ma un modo di rappresentare due stati). L'interazione scambia un quanto:
$$H=\hbar\omega a^+a+E_0I_2+\omega S_3+\gamma(a^+S_-+S_+a),$$
con il termine costante $E_0$ trascurabile. Gli stati $|n,m\rangle=\psi_n(x)|\frac12,m\rangle$ diagonalizzano $H_{em}$ e $H_{at}$.

## Formule chiave
$$a^+S_-|n,+\tfrac12\rangle=\hbar\sqrt{n+1}\,|n+1,-\tfrac12\rangle,\qquad aS_+|n+1,-\tfrac12\rangle=\hbar\sqrt{n+1}\,|n,+\tfrac12\rangle$$
$$|E_n(\pm1)\rangle=\frac{1}{\sqrt2}\left(|n+1,-\tfrac12\rangle\pm|n,+\tfrac12\rangle\right),\qquad E_n(\pm1)=\hbar\omega(n+\tfrac12)\pm\gamma\sqrt{n+1}$$
L'ultima formula è quella stampata nella dispensa; dato l'autovalore $\pm\hbar\sqrt{n+1}$ di $a^+S_-+aS_+$, il termine d'interazione dovrebbe essere $\pm\gamma\hbar\sqrt{n+1}$ (da verificare sul PDF).

## Intuizione
$a^+S_-$ descrive l'emissione (l'atomo scende $E_2\to E_1$ e nasce un fotone), $S_+a$ l'assorbimento. Poiché $\hbar\omega a^+a+\omega S_3$ commuta con $H$, il numero totale di eccitazioni si conserva e $H$ si diagonalizza in blocchi $2\times2$; l'interazione separa i due livelli degeneri di $\pm\gamma\sqrt{n+1}$.

## Come si usa
Si verifica che $|E_n(\pm1)\rangle$ è autostato sia di $a^+S_-+aS_+$ (autovalore $\pm\hbar\sqrt{n+1}$) sia di $\hbar\omega a^+a+\omega S_3$ (autovalore $\hbar\omega n+\hbar\omega/2$), quindi di $H$ (`2022_QP.pdf` pp. 143-144).

## Nei corsi
- **Quantum physics** (triennale): §12.1 della dispensa di V. Penna, come applicazione del formalismo di spin. Fonti: `triennale/ANNO 2/quantum phisics/2022_QP.pdf` (pp. 143-144).

## Prerequisiti
- [[Matrici di Pauli]]: S₃ e S± per il sistema a due livelli
- [[Oscillatore armonico quantistico]]: il modo del campo è descritto da ħω a⁺a

## Porta a
- Nessuno.

## Collegati
- [[Quantizzazione del campo elettromagnetico]]: $n$ conta i fotoni del modo
- [[Spettri atomici]]: transizioni tra due livelli con emissione e assorbimento di fotoni
